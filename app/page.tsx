import Hello from '../app/components/hello'
export default function Page() {
  console.log("What am I doing here? -- server");
  return(
    <>
      <h1 className="font-bold text-3xl text-white-700">Hello World</h1>
      <Hello />
    </>
  )
}