import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";

const Routers = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/*" element={<Navigate to="/home" />} />
		</Routes>
	);
};

export default Routers;
