import React, { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";
import hogs from "../porkers_data";

function App() {
	const [hogList, setHogList] = useState(hogs);
	const [showGreasedOnly, setShowGreasedOnly] = useState(false)	
	const [sortBy, setSortBy] = useState("")
	const [newHog, setNewHog] = useState({
		name: "",
		weight: "",
		specialty: "",
		greased: false,
	});

	function handleHide(name) {
		setHogList(hogList.filter((hog) => hog.name !== name ));
	}

	function handleAddHog(e) {
		e.preventDefault();
		setHogList([...hogList, newHog]);
	}

	// Filter & Sort

	let displayedHogs = [...hogList];

	if (showGreasedOnly) {
		displayedHogs = displayedHogs.filter((hog) => hog.greased);
	}

	if (sortBy === "name") {
		displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
	}

	if (sortBy === "weight") {
		displayedHogs.sort((a, b) => a.weight - b.weight);
	}


	return (
		<div className="App">
			<Nav />

			<label>
				Greased Pigs Only?
				<input
					type="checkbox"
					onChange={() => setShowGreasedOnly(!showGreasedOnly)}
				/>
			</label>

			<label>
				Sort by:
					<select onChange={(e) => setSortBy(e.target.value)}>
						<option value="">Select</option>
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
			</label>

			<form onSubmit={handleAddHog}>
				<label>
					Name:
					<input
					type="text"
					onChange={(e) =>
						setNewHog({ ...newHog, name: e.target.value })
					}
					/>
				</label>

				<label>
					Weight:
					<input
						type="number"
						onChange={(e) => 
							setNewHog({ ...newHog, weight: Number(e.target.value) })
						}
					/>
				</label>

				<label>
					Specialty:
					<input
						type="text"
						onChange={(e) =>
							setNewHog({ ...newHog, specialty: e.target.value })
						}
					/>
				</label>

				<label>
					Greased?
					<input
						type="checkbox"
						onChange={(e) =>
							setNewHog({ ...newHog, greased: e.target.checked })
						}
					/>
				</label>

				<button type="submit">Add Hog</button>
			</form>

			<div>
				{displayedHogs.map((hog) => (
 				 	<HogCard
						key={hog.name}
						hog={hog}
						onHide={handleHide}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
