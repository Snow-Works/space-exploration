
import "./Technology.css";


const technologies = [
    {
        number: "01",
        title: "Space Engineering",
        description:
            "Exploring the engineering principles behind spacecraft, orbital systems and advanced space infrastructure.",
    },
    {
        number: "02",
        title: "Satellite Systems",
        description:
            "Understanding the technologies that connect our planet and expand our ability to observe the universe.",
    },
    {
        number: "03",
        title: "Space Innovation",
        description:
            "Discovering emerging technologies and ideas shaping the next generation of space exploration.",
    },
];

const Technology = () => {
    return (
        <section className="technology-section" id="technology">
            

            <div className="technology-heading reveal">
                <span className="section-tag">
                    THE SCIENCE OF TOMORROW
                </span>

                <h2>
                    Technology that
                    <br />
                    <span>transcends boundaries.</span>
                </h2>

                <p>
                    Exploring the systems, discoveries and
                    innovations driving humanity forward.
                </p>
            </div>

            <div className="technology-grid">
                {technologies.map((item) => (
                    <article className="technology-card reveal" key={item.number}>
                        <span className="technology-number">
                            {item.number}
                        </span>

                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>

                        <span className="technology-arrow">↗</span>
                    </article>
                ))}
            </div>

        </section>
    );
};

export default Technology;
