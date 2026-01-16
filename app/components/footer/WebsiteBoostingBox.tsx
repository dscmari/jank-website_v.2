import Image from "next/image";

export default function WebsiteBoostingBox() {
  return (
    <div className="flex-1 bg-custom-white leading-8 p-8 rounded-lg lg:mx-0 flex flex-col justify-center dark">
      <div className="flex justify-around max-w-screen">
        <Image
          src="/images/Website_Boosting_Logo.png"
          alt="Website Boosting Logo"
          className="max-w-1/2"
          width={300}
          height={300}
        />
        <Image
          src="/images/vdi.jpg"
          alt="VDI Logo"
          className="max-w-1/3"
          width={300}
          height={300}
        />
      </div>
       <p className="mx-4 mt-2 text-sm font-light text-center mt-8">
        Jan Krösche veröffentlicht regelmäßig im Fachmagazin „Website Boosting“
        und hält Vorträge beim Verein Deutscher Ingenieure.
      </p>
    </div>
  );
}
