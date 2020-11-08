import React from 'react';

export interface Props {
    name: string,
    ingredients: string,
    steps: string,
}

const Recipe: React.FC<Props> = (props) => {
    return (
        <div>
            <div>Recipe name</div>
            <div>
                <ol>
                    <li>Step 1</li>
                    <li>Step 2</li>
                    <li>Step 3</li>
                </ol>
            </div>
            <div>
                ingredients
            </div>
        </div>
    )
}

export default Recipe;