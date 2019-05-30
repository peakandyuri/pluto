import React, { useState } from 'react';
import { Button } from "antd";
import "./example.less";
import img from '@/assets/Janice.jpg';

export default function Example() {
    const [person, setPerson] = useState(null);
    const checkPerson = () => {
        if (person) {
            return <>
                She is <strong>{person}</strong>
            </>;
        }
        return <>
            Who is she? <Button onClick={() => setPerson('Janice')}>see</Button>
        </>;
    }
    return (
        <div className="example">
            <div>
                <img src={img} />
            </div>
            {
                checkPerson()
            }
        </div>
    );
}