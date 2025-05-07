import emailjs from '@emailjs/browser';

export default async (data) => {
    await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAIL_SENDER_KEY
    );
}