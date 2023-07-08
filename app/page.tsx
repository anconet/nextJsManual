
function Card() {

  return <div><h1 className="bg-slate-500 text-slate-300 rounded-lg p-3 flex items-center">
    <p className="text-blue-400">Hello</p>, Next.js!</h1>
  </div>
}

export default function Page() {
  return <div className="bg-slate-600 p-4 grid grid-cols-2 gap-4 rounded-xl">
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
  </div>
}
