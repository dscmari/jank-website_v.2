
type Props = {
    className?: string;
};

export default function ContactWithImg({className}: Props) {
  const classes = `flex-1 relative border-b-1 border-slate-200 ${className}`
  return (
    <section className={classes}>
      <div>
        <img
          src="/images/portraits/39321-4000_02.jpg"
          alt="Portrait Jan Krösche"
          className="h-96 object-cover"
        />

        <div className="p-4 bg-white absolute z-10 right-left bottom-0 flex flex-col rounded-tr-4xl h-1/2">
          <div>
            <img
              src="/images/jank_logo.jpg"
              alt="Jan Krösche Logo"
              style={{ width: "200px" }}
            />
          </div>
          <div className="flex flex-col pb-4">
            <span className="block">Jan Krösche</span>
            <span className="block"></span>+49 17655109383
            <span className="block">jan@jankroesche.de</span>
          </div>
        </div>
      </div>

      <div className="absolute bg-white w-full h-12 z-1 bottom-0"></div>
    </section>
  );
}
