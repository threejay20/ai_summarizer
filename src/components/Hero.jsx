import { logo } from '../assets';

// Define a functional component called "Hero"
const Hero = () => {
  return (
    // Create a header section with centered content
    <header className="w-full flex justify-center items-center flex-col">
      {/* Create a navigation bar */}
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        {/* Display a logo image */}
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        {/* Create a button that opens a GitHub link when clicked */}
        <button
          type="button"
          onClick={() => window.open('https://github.com/threejay20/ai_summarizer.git')}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      {/* Display a main heading */}
      <h1 className="head_text">
        {/* Display text with line break for smaller screens */}
        Summarize Articles with <br className="max-md:hidden" />
        {/* Display a gradient-colored text */}
        <span className="orange_gradient"> OpenAi GPT-4 </span>
      </h1>

      {/* Display a subheading */}
      <h2 className="desc">
        {/* Provide a description of the application's purpose */}
        Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

// Export the "Hero" component as the default export
export default Hero;
