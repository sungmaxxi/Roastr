import React from 'react'
import App from "./App"
import { render } from '@testing-library/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


render(<App />, document.getElementById("root"))