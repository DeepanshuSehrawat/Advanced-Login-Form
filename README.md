# User Registration Form with Validation

A comprehensive React-based user registration form with real-time validation, responsive design, and seamless user experience. Built without any third-party validation libraries, using only React hooks and vanilla JavaScript.

## 🚀 Features

### Form Fields
- **Personal Information**: First Name, Last Name, Username
- **Contact Details**: Email, Phone Number with Country Code
- **Security**: Password with show/hide toggle
- **Location**: Country and City (dependent dropdowns)
- **Identity**: PAN Number and Aadhar Number

### Validation & User Experience
- ✅ Real-time field validation
- ✅ Visual error indicators with descriptive messages
- ✅ Submit button disabled until all fields are valid
- ✅ Password strength requirements
- ✅ Format validation for email, phone, PAN, and Aadhar
- ✅ Dependent city dropdown based on country selection
- ✅ Responsive design for mobile and desktop

### Navigation
- ✅ Success page displaying submitted information
- ✅ Clean routing between form and success page
- ✅ Option to register multiple users

## 📋 Validation Rules

### Required Fields
All fields are mandatory and must be filled before submission.

### Specific Validations

| Field | Validation Rule |
|-------|----------------|
| **First/Last Name** | Minimum 2 characters |
| **Username** | Minimum 3 characters |
| **Email** | Valid email format (user@domain.com) |
| **Password** | 8+ characters with uppercase, lowercase, number, and special character |
| **Phone Number** | Exactly 10 digits |
| **PAN Number** | Format: AAAAA9999A (5 letters, 4 digits, 1 letter) |
| **Aadhar Number** | Exactly 12 digits |
| **Country/City** | Must select from dropdown options |

## 🛠️ Technical Implementation

### Built With
- **React** (Hooks: useState)
- **Tailwind CSS** for styling
- **Lucide React** for icons


### Key Components
- **FormPage**: Main registration form with validation
- **SuccessPage**: Displays submitted information
- **App**: Handles routing between components

### State Management
- Form data stored in React state
- No external state management libraries
- No localStorage/sessionStorage usage
- Real-time validation state tracking

## 🎨 Design Features

### Responsive Layout
- Mobile-first design approach
- Grid-based responsive columns
- Optimized for various screen sizes

### Visual Feedback
- Color-coded validation states
- Icon indicators for errors and success
- Smooth hover and focus transitions
- Gradient backgrounds for modern appearance

### Interactive Elements
- Password visibility toggle
- Disabled states for incomplete forms
- Dynamic city dropdown based on country selection
- Loading states and button feedback

## 📱 User Journey

1. **Form Entry**: User fills out registration form
2. **Real-time Validation**: Immediate feedback on field completion
3. **Submit**: Button becomes active when all validations pass
4. **Success Page**: Displays all submitted information
5. **Navigation**: Option to register another user

## 🌍 Supported Countries & Cities

### Countries Available
- **India**: Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad
- **USA**: New York, Los Angeles, Chicago, Houston, Phoenix
- **UK**: London, Birmingham, Manchester, Glasgow, Liverpool
- **Canada**: Toronto, Vancouver, Montreal, Calgary, Ottawa

### Country Codes
- +91 (India)
- +1 (USA/Canada)
- +44 (UK)
- +61 (Australia)
- +49 (Germany)

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DeepanshuSehrawat/Advanced-Login-Form.git
   cd login-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`
   or which ever your terminal directs

## 📁 Project Structure

```
src/
├── App.js              # Main component with routing logic
├── components/
│   ├── FormPage.js     # Registration form component
│   └── SuccessPage.js  # Success display component
├── styles/
│   └── index.css       # Tailwind CSS styles
└── utils/
    └── validation.js   # Validation helper functions
```

## 🔧 Customization

### Adding New Countries/Cities
```javascript
const countries = [
  { 
    name: 'YourCountry', 
    cities: ['City1', 'City2', 'City3'] 
  },
  // ... existing countries
];
```

### Modifying Validation Rules
```javascript
const validateField = (name, value) => {
  switch (name) {
    case 'customField':
      return value.length < 5 ? 'Custom validation message' : '';
    // ... existing validations
  }
};
```

### Styling Customization
The project uses Tailwind CSS. Modify classes in components or extend the configuration:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#your-color-code',
      }
    }
  }
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] All fields show validation errors when empty
- [ ] Email validation works correctly
- [ ] Password requirements are enforced
- [ ] Phone number accepts only 10 digits
- [ ] PAN format validation works
- [ ] Aadhar accepts only 12 digits
- [ ] City dropdown updates based on country selection
- [ ] Submit button is disabled until form is valid
- [ ] Success page displays all information correctly
- [ ] Mobile responsiveness works across devices

### Test Data
```javascript
// Valid test data
const testData = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe123",
  email: "john.doe@example.com",
  password: "Password123!",
  countryCode: "+91",
  phoneNumber: "9876543210",
  country: "India",
  city: "Mumbai",
  panNo: "ABCDE1234F",
  aadharNo: "123456789012"
};
```

## 🐛 Troubleshooting

### Common Issues

**Form not submitting**
- Check if all fields are filled correctly
- Ensure validation rules are met
- Verify console for JavaScript errors

**City dropdown not updating**
- Ensure country is selected first
- Check if the country exists in the countries array

**Styling issues**
- Verify Tailwind CSS is properly imported
- Check for conflicting CSS rules

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch 
3. Commit your changes 
4. Push to the branch 
5. Open a Pull Request


## 👥 Authors

- **Deepanshu Sehrawat** 

## 🙏 Acknowledgments

- React team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- Lucide React for beautiful icons
- Community for inspiration and feedback

## 📞 Support

If you have any questions or need help with setup, please:
- Open an issue on GitHub
- Contact: deepanshusehrawat008@gmail.com


---

**Happy Coding! 🎉**
