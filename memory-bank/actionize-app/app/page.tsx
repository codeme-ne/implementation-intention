export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center mb-8">Actionize</h1>
        
        <textarea 
          placeholder="Schreibe hier deine Gedanken, Aufgaben oder Ideen..."
          rows={6}
          className="w-full bg-gray-800 rounded-lg border border-gray-700 p-4 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
          Klarheit schaffen
        </button>
        
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 min-h-[100px]">
          {/* Output area - will be populated later */}
        </div>
        
        <p className="text-sm text-gray-400 text-center">
          Deine Eingaben werden nicht gespeichert.
        </p>
      </div>
    </main>
  );
}
