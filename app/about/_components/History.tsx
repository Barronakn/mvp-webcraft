import Title from "./Title"
type HistoryProps = {
    title?: string;
};
export default function History({title}: HistoryProps) {
  return (
    <section className="px-6 md:px-16 bg-cream-300 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-2/3 mx-auto">
          <Title name={title} className="text-center" />
          <div className="space-y-6 mt-4">
            <p className="text-lg md:text-xl">
              Le Bénin, berceau du Vaudou et terre des anciens royaumes d'Afrique de l'Ouest, recèle des trésors culturels d'une richesse exceptionnelle. Notre plateforme est née du désir de partager cette magnificence avec le monde entier.
            </p>
            <p className="text-lg md:text-xl">
              En 2021, notre équipe de passionnés de culture béninoise a entrepris de créer une passerelle entre les voyageurs en quête d'authenticité et les communautés locales gardiennes des traditions ancestrales. Nous avons parcouru le pays, rencontré les artisans, exploré chaque site historique pour vous offrir une expérience immersive unique.
            </p>
            <p className="text-lg md:text-xl">
              Aujourd'hui, nous collaborons avec plus de 350 artisans locaux et 15 sites touristiques majeurs pour promouvoir un tourisme responsable et enrichissant, qui bénéficie directement aux communautés béninoises.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
