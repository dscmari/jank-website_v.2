

export default function page() {
  return (
    <div className="m-8 lg:m-16">
      <h1 className="!mb-8">Impressum</h1>
      <div className="flex flex-col">
        <span>Jan Krösche - SEO & Google Ads Beratung</span>
        <span>Obere Mühlstraße 6</span>
        <span>86825 Bad Wörishofen</span>
      </div>
      <div className="flex flex-col">
        <h2 className="mt-4">Kontakt</h2>
        <span>Telefon: 017655109383</span>
        <span>E-Mail: jan@jankroesche.de</span>
      </div>
      <div>
        <h2 className="mt-4">Haftungsausschluss</h2>
        <div>
          {" "}
          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größtmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            Inhalte können wir jedoch keine Gewähr übernehmen. Als
            Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
            8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen
            oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
            der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
            hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab
            dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
            diese Inhalte umgehend entfernen.
          </p>
        </div>
        <div>
          <h2 className="mt-4">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Verlinkungen / Links zu externen Webseiten
            Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
            wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
            zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Verletzungen rechtlicher Art
            werden wir derartige Links umgehend entfernen.
          </p>
        </div>
        <div>
          <h2 className="mt-4">Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Seiteninhalte unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. Die Urheberrechte
            Dritter werden beachtet und sind auf diesen Seiten als solche
            gekennzeichnet. Falls Ihnen eine Urheberrechtsverletzung auffallen
            sollte, dann freuen wir uns über einen entsprechenden Hinweis.
          </p>
        </div>
        <div>
          <h2 className="mt-4">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p>
            Wir nehmen an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teil. Zuständig ist die
            Universalschlichtungsstelle des Zentrums für Schlichtung e.V.,
            Straßburger Straße 8, 77694 Kehl am Rhein
            (https://www.verbraucher-schlichter.de).
          </p>
        </div>
      </div>
    </div>
  );
}
