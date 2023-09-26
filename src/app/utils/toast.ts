import toast from 'react-hot-toast';

export const dispatchToast = (text: string, success: boolean) => {
  toast(text,
    {
      icon: success ? '✅' : '❌',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
};