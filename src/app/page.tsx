import RSVPForm from '@/app/components/RSVPForm';

export default function RSVPPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-alternativeSecondaryBackgroundColor p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md max-w-4xl w-full">
        <div className="flex-1 p-4 md:p-8 order-last md:order-first">
          <h1 className="text-4xl pb-8 md:p-8 font-medium text-secondaryTextColor text-center">Gracias por acompañarnos 🎉</h1>
          <p className='p-2 font-medium text-justify text-secondaryTextColor'>Agradecemos tu presencia y esperamos que hayas disfrutado del evento tanto como nosotros.</p>
          <p className='p-2 font-medium text-justify text-secondaryTextColor'>¡No olvides seguirnos en nuestras redes sociales y visitar nuestra página web para estar al tanto de todas nuestras novedades y próximos eventos!</p>
          <p className='p-2 font-medium text-justify text-secondaryTextColor'>
            <a href="https://ig.yecorabeauty.com" target="_blank" className="text-blue-500 pr-4">Instagram</a> |
            <a href="https://fb.yecorabeauty.com" target="_blank" className="text-blue-500 p-4">Facebook</a> |
            <a href="https://www.yecorabeauty.com" target="_blank" className="text-blue-500 p-4">Página web</a>
          </p>
          <p className='p-2 font-medium text-justify text-secondaryTextColor'>¡Un abrazo!</p>
          <p className='p-2 font-medium text-justify text-secondaryTextColor'>Yécora G. Almenara</p>
        </div>
      </div>
    </div>
  );
}