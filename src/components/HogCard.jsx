import { useState } from "react";

function HogCard({ hog, onHide }) {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <div
            className="ui card"
            aria-label="hog card"
            onClick={() => setShowDetails(!showDetails)}
        >
            <div className="image">
                <img src={hog.image} alt={"Photo of " + hog.name} />
            </div>

        <div className="content">
            <h3>{hog.name}</h3>

            {showDetails && (
                <>
                    <p>Specialty: {hog.specialty}</p>
                    <p>{hog.weight}</p>
                    <p>{hog.greased ? "Greased" : "Nongreased"}</p>
                    <p>{hog["highest medal achieved"]}</p>
                </>                      
                    )}

                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            onHide(hog.name);
                        }}
                    >
                        Hide Me
                    </button>

            </div>
        </div>
    );
}

export default HogCard