import TimeLeft from "./components/TimeLeft";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="text-4xl left-6 lg:text-8xl top-1/2 absolute lg:left-1/2 lg:top-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2">
        Jeremy Marc
      </div>

      <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10">
        <div className="flex flex-col lg:flex-row justify-between">
          <TimeLeft />
          <div className="">
            <div className="">Past Work</div>
            <div className="">
              <a
                href="https://vacationrenter.com"
                target="_blank"
                rel="noopener"
              >
                VacationRenter
              </a>{" "}
              (Co-Founder)
            </div>
            <div className="">Speaken (Founder)</div>
            <div className="">Streamup</div>
            <div className="">Sweetlabs (Google Venture)</div>
            <div className="">RemixJobs (Founder)</div>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <div className="">
            <a
              href="https://linkedin.com/in/jeremymarc"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </div>
          <div className="">
            <a href="https://x.com/jeremymarc" target="_blank" rel="noopener">
              X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
