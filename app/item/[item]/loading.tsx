function loading() {
    return (
       <div className="bg-gradient-to-br from-[#394F58] to-[#183B7E] min-h-screen flex flex-col items-center justify-center text-slate-500">
  

            <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
               Loading fetch data
            </h1>

            <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
                Hold on, generating API response
            </h2>

       </div>
    )
}

export default loading