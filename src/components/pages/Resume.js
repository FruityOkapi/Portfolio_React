import React from "react";
import Icon from '@mdi/react';
import { mdiDownloadBoxOutline } from '@mdi/js';

export default function Resume() {
    return (
        <div class="box is-flex is-justify-content-space-between">
            <div>
                <h2 class="title">Front-end Proficiencies</h2>
                <ul class="mb-6">
                    <li class="subtitle">HTML</li>
                    <li class="subtitle">CSS</li>
                    <li class="subtitle">JavaScript</li>
                    <li class="subtitle">React</li>
                    <li class="subtitle">Mongoose.js</li>
                    <li class="subtitle">Sequelize</li>
                </ul>
                <h2 class="title">Back-end Proficiencies</h2>
                <ul>
                    <li class="subtitle">MySQL</li>
                    <li class="subtitle">MongoDB</li>
                    <li class="subtitle">Express.js</li>
                    <li class="subtitle">Node.js</li>
                </ul>
            </div>
            <div>
                <a href="https://docs.google.com/document/d/1qF_p8L2_BJYJg2xPzFdDV1QhBd0IkDc1_gl8CeK5dLk/edit?usp=sharing">
                    <Icon
                    path={mdiDownloadBoxOutline} 
                    size={1}/>
                </a>
            </div>
        </div>
    )
}