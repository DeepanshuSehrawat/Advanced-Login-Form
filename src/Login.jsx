import React, { useState } from 'react';
import { Eye, EyeOff, Check, X } from 'lucide-react';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('form');
  const [submittedData, setSubmittedData] = useState(null);

  const FormPage = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      countryCode: '+91',
      phoneNumber: '',
      country: '',
      city: '',
      panNo: '',
      aadharNo: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [touched, setTouched] = useState({});

    const countries = [
      { name: 'India', cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'] },
      { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'] },
      { name: 'UK', cities: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool'] },
      { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'] }
    ];

    const countryCodes = [
      { code: '+91', country: 'India' },
      { code: '+1', country: 'USA/Canada' },
      { code: '+44', country: 'UK' },
      { code: '+61', country: 'Australia' },
      { code: '+49', country: 'Germany' }
    ];

    const validateField = (name, value) => {
      switch (name) {
        case 'firstName':
        case 'lastName':
          return value.trim().length < 2 ? 'Must be at least 2 characters' : '';
        case 'username':
          return value.trim().length < 3 ? 'Must be at least 3 characters' : '';
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return !emailRegex.test(value) ? 'Invalid email format' : '';
        case 'password':
          const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          return !passwordRegex.test(value) ? 'Password must be 8+ chars with uppercase, lowercase, number, and special character' : '';
        case 'phoneNumber':
          const phoneRegex = /^\d{10}$/;
          return !phoneRegex.test(value) ? 'Phone number must be 10 digits' : '';
        case 'country':
          return !value ? 'Please select a country' : '';
        case 'city':
          return !value ? 'Please select a city' : '';
        case 'panNo':
          const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
          return !panRegex.test(value.toUpperCase()) ? 'PAN format: AAAAA9999A' : '';
        case 'aadharNo':
          const aadharRegex = /^\d{12}$/;
          return !aadharRegex.test(value) ? 'Aadhar must be 12 digits' : '';
        default:
          return '';
      }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
        ...(name === 'country' && { city: '' }) // Reset city when country changes
      }));

      if (touched[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: validateField(name, value)
        }));
      }
    };

    const handleBlur = (e) => {
      const { name, value } = e.target;
      setTouched(prev => ({ ...prev, [name]: true }));
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    };

    const validateForm = () => {
      const newErrors = {};
      Object.keys(formData).forEach(key => {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const isFormValid = () => {
      return Object.keys(formData).every(key => {
        const value = formData[key];
        return value && !validateField(key, value);
      });
    };

    const handleSubmit = () => {
      if (validateForm()) {
        setSubmittedData(formData);
        setCurrentRoute('success');
      }
    };

    const selectedCountryData = countries.find(c => c.name === formData.country);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">User Registration</h1>
          
          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <X className="w-4 h-4 mr-1" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <X className="w-4 h-4 mr-1" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username *
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter username"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <X className="w-4 h-4 mr-1" />
                  {errors.username}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <X className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <X className="w-4 h-4 mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                >
                  {countryCodes.map(cc => (
                    <option key={cc.code} value={cc.code}>
                      {cc.code} ({cc.country})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`flex-1 px-4 py-2 border-t border-r border-b rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="1234567890"
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <X className="w-4 h-4 mr-1" />
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Country and City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <X className="w-4 h-4 mr-1" />
                    {errors.country}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  disabled={!formData.country}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  } ${!formData.country ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                >
                  <option value="">Select City</option>
                  {selectedCountryData?.cities.map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <X className="w-4 h-4 mr-1" />
                    {errors.city}
                  </p>
                )}
              </div>
            </div>

            {/* PAN and Aadhar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PAN Number *
                </label>
                <input
                  type="text"
                  name="panNo"
                  value={formData.panNo}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.panNo ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="ABCDE1234F"
                  style={{ textTransform: 'uppercase' }}
                />
                {errors.panNo && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <X className="w-4 h-4 mr-1" />
                    {errors.panNo}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aadhar Number *
                </label>
                <input
                  type="text"
                  name="aadharNo"
                  value={formData.aadharNo}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.aadharNo ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="123456789012"
                />
                {errors.aadharNo && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <X className="w-4 h-4 mr-1" />
                    {errors.aadharNo}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isFormValid()}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
                isFormValid()
                  ? 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isFormValid() ? (
                <span className="flex items-center justify-center">
                  <Check className="w-5 h-5 mr-2" />
                  Submit Registration
                </span>
              ) : (
                'Complete all fields to submit'
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const SuccessPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Registration Successful!</h1>
            <p className="text-gray-600">Your information has been submitted successfully.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Submitted Information:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-gray-700">First Name:</span>
                <span className="ml-2 text-gray-900">{submittedData.firstName}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Last Name:</span>
                <span className="ml-2 text-gray-900">{submittedData.lastName}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Username:</span>
                <span className="ml-2 text-gray-900">{submittedData.username}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Email:</span>
                <span className="ml-2 text-gray-900">{submittedData.email}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Phone:</span>
                <span className="ml-2 text-gray-900">{submittedData.countryCode} {submittedData.phoneNumber}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Country:</span>
                <span className="ml-2 text-gray-900">{submittedData.country}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">City:</span>
                <span className="ml-2 text-gray-900">{submittedData.city}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">PAN Number:</span>
                <span className="ml-2 text-gray-900">{submittedData.panNo}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Aadhar Number:</span>
                <span className="ml-2 text-gray-900">{submittedData.aadharNo}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setCurrentRoute('form');
                setSubmittedData(null);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Register Another User
            </button>
          </div>
        </div>
      </div>
    );
  };

  return currentRoute === 'form' ? <FormPage /> : <SuccessPage />;
};

export default App;