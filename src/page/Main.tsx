import Intro from "@/components/intro";
 import About from "@/components/about";
 import Projects from "@/components/Project"

const Main: React.FC = () => {
    return (
        <div className="lg:mx-32 md:mx-4 mx-3" >
             <Intro />
             <About />
             <Projects />
             
        </div>
    );
}

export default Main