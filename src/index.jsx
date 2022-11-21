import React from "react";
import { createRoot } from "react-dom/client"
import Artist from './Artist'

const container = document.getElementById('root')
const root = createRoot(container)

const Display = () => <><Artist /></>

root.render(<Display />)