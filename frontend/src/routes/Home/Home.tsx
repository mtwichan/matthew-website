import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { IOptions, RecursivePartial, Container, Engine } from "tsparticles-engine";

const TS_PARTICLES_OPTIONS: (RecursivePartial<IOptions>| undefined) = {
    "fullScreen": {
        "zIndex": 1
    },
    "particles": {
        "color": {
            "value": [
                "#1E00FF",
                "#FF0061",
                "#E1FF00",
                "#00FF9E"
              ]
        },
        "move": {
            "direction": "bottom",
            "enable": true,
            "outModes": {
                "default": "out"
            },
            "size": true,
            "speed": {
                "min": 1,
                "max": 3
            }
        },
        "number": {
            "value": 500,
            "density": {
                "enable": true,
                "area": 800
            }
        },
        "opacity": {
            "value": 1,
            "animation": {
                "enable": false,
                "startValue": "max",
                "destroy": "min",
                "speed": 0.3,
                "sync": true
            }
        },
        "rotate": {
            "value": {
                "min": 0,
                "max": 360
            },
            "direction": "random",
            "animation": {
                "enable": true,
                "speed": 60
            }
        },
        "tilt": {
            "direction": "random",
            "enable": true,
            "move": true,
            "value": {
                "min": 0,
                "max": 360
            },
            "animation": {
                "enable": true,
                "speed": 60
            }
        },
        "shape": {
            "type": [
                "circle",
                "square",
                "triangle",
                "polygon"
            ],
            "options": {
                "polygon": [
                    {
                        "sides": 5
                    },
                    {
                        "sides": 6
                    }
                ]
            }
        },
        "size": {
            "value": {
                "min": 2,
                "max": 4
            }
        },
        "roll": {
            "darken": {
                "enable": true,
                "value": 30
            },
            "enlighten": {
                "enable": true,
                "value": 30
            },
            "enable": true,
            "speed": {
                "min": 15,
                "max": 25
            }
        },
        "wobble": {
            "distance": 30,
            "enable": true,
            "move": true,
            "speed": {
                "min": -15,
                "max": 15
            }
        }
    }
}
const Home = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container)
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="tsparticle-overlay"
                options={TS_PARTICLES_OPTIONS}
            />
            <div className="flex justify-center items-center w-full" style={{ height: "calc(100vh - 125px)" }}>
                <div className="mx-auto w-4/5 md:w-3/5 p-8 border-2 border-solid border-black bg-cyan-50 z-100">
                    <div className="container mx-auto flex flex-wrap flex-col items-center md:flex-row">
                        {/* Left Column */}
                        <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
                            <h1 className="my-4 text-3xl font-bold leading-tight">Hi I'm Matthew Chan!</h1>
                            <p className="my-4 text-2xl">Hi I like working on XYZ</p>

                        </div>
                        {/* Right Column */}
                        <div className="flex w-full md:w-2/5 ">
                            something cool
                        </div>
                    </div>
                    <div className="container mx-auto">
                        {/* About me extended */}
                        <div className="w-full">
                            I've just ended an 8 year stint as a Senior Engineer at Google, where I worked on making music and art and all sorts of creative interactions with Machine Learning, web components and web standards, and the guts of Chromium. You can read a bit more about me and my past work. Most of my personal code is on GitHub or on Glitch.
                            I am available for freelance work in a consulting capacity, or as a tech advisor. If you would like to get in touch with me about working with you, email me and we'll chat!
                        </div>
                        {/* Call to action buttons */}
                        <div className="flex align-center my-4 flex-wrap">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 rounded">Download Resume</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">View Projects</button>
                            <button className="bg-gray-700 hover:bg-gray-900 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-7" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
                                </svg>
                            </button>

                            <button className="bg-blue-600 hover:bg-blue-800 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg className="w-7 h-7 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Home;