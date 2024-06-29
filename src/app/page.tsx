import RSVPForm from '@/app/components/RSVPForm';

export default function RSVPPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-alternativeSecondaryBackgroundColor p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md max-w-4xl w-full">
        <div className="flex-1 p-4 md:p-8 order-last md:order-first">
          <h1 className="text-4xl pb-8 md:p-8  font-medium text-secondaryTextColor text-center">Acompañanos a celebrar 🎉</h1>
          <p className='p-2 font-medium text-justify text-secondaryTextColor'> Nos encantaría verte ahí y disfrutar juntos de un día lleno de alegría y buenos momentos.</p>
          <p className='p-2 font-medium text-justify text-secondaryTextColor'>Confírmanos si puedes venir respondiendo a este correo antes del 5 de Julio.</p>
          <p className='p-2 font-medium text-justify text-secondaryTextColor'>¡Un abrazo!</p>
          <p className='p-2 font-medium text-justify text-secondaryTextColor'>Yécora G. Almenara</p>
        </div>
        <div className="flex-1 p-4 md:p-8">
          <RSVPForm />
        </div>
      </div>
    </div>
  );
}