import { useState } from 'react';

import { ToggleSwitch } from 'flowbite-react';
import useDarkSide from "./darkmode/useDarkSide.js";

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light');

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <div>
                <ToggleSwitch checked={darkSide} onChange={toggleDarkMode} size={56} />
            </div>
        </>
    );
}