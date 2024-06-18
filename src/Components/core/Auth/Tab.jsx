export default function Tab({ tabData, field, setField }) {
  return (
    <div className="flex bg-[#001F35] p-1 gap-x-1 my-6 rounded-full max-w-max shadow-inset">
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`py-2 px-5 rounded-full transition-all duration-200 text-white ${
            field === tab.type ? "bg-blue-600" : ""
          }`}
        >
          {tab.tabName}
        </button>
      ))}
    </div>
  );
}
