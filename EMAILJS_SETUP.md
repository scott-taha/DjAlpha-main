# EmailJS Setup Instructions

To enable the booking form to send emails to alphadj210@gmail.com, follow these steps:

## 1. Create an EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account

## 2. Create an Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Connect your email account (alphadj210@gmail.com)
- Note your **Service ID**

## 3. Create an Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```
Subject: New Booking Request from {{from_name}}

You have received a new booking request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Event Type: {{event_type}}
Event Date: {{event_date}}

Additional Details:
{{message}}

---
This message was sent from DJ Alpha's booking form.
```

- Note your **Template ID**

## 4. Get Your Public Key
- Go to "Account" > "General"
- Copy your **Public Key**

## 5. Update the Code
Open `/src/app/components/BookingPage.tsx` and replace these values on lines 26-36:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  {
    to_email: 'alphadj210@gmail.com',
    from_name: formData.fullName,
    from_email: formData.email,
    phone: formData.phone,
    event_type: formData.eventType,
    event_date: formData.eventDate,
    message: formData.message
  },
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
);
```

## 6. Test the Form
- Fill out the booking form
- Check alphadj210@gmail.com for the email

That's it! The form will now send all booking requests directly to your email.
