import emailjs from '@emailjs/nodejs';

export const notify = async (email: string, subject: string, message: string) => {
  try {
    await emailjs.send(process.env.EMAIL_SERVICE!, process.env.EMAIL_TEMPLATE!, {
      email,
      subject,
      message
    }, {
      publicKey: process.env.EMAIL_PUBLIC_KEY!,
      privateKey: process.env.EMAIL_PRIVATE_KEY,
    });

    return true;
  } catch (error) {
    console.error(error);
    return null;
  }
};