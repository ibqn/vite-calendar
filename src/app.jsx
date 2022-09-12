import Calendar from './components/calendar'

export default function App() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="p-10 text-2xl font-bold uppercase">Calendar view</h1>
      <div className="w-full">
        <Calendar />
      </div>
    </section>
  )
}
