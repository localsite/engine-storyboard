import React, { useState } from 'react'

export const PageFilter = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    return (
        <div id="sidebar-pageFilterPanel" className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            <div className="sidebar-group-144">
                <div className="sidebar-flex-col">
                    <div className="sidebar-logo">
                        <button onClick={() => setIsCollapsed(!isCollapsed)}>Click Me!</button>
                    </div>
                    <div className="sidebar-flex-col">
                    <div className="sidebar-frame-144 flex-row">
                        <img
                        src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c55/225b/b811ba4586c1ce86d2045779c5b4b7cf"
                        alt="image not found"
                        className="sidebar-my-dashboard-icon"
                        />
                        <div className="sidebar-group-142">
                        <p className="sidebar-txt-686">My Impact</p>
                        </div>
                    </div>
                    <div className="sidebar-frame-145 flex-row">
                        <img
                        src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f46/daa6/8586e679a3b500ecbd9be85f3b4e48bb"
                        alt="image not found"
                        className="sidebar-community-icon"
                        />
                        <div className="sidebar-group-1421">
                        <p className="sidebar-txt-565">Community</p>
                        </div>
                    </div>
                    <div className="sidebar-frame-146 flex-row">
                        <img
                        src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beba/9cb3/c384dd2c67cdb8733e11d820a03acc86"
                        alt="image not found"
                        className="sidebar-home-icon"
                        />
                        <div className="sidebar-group-143">
                        <p className="sidebar-txt-774">Household</p>
                        </div>
                    </div>
                    <div className="sidebar-frame-147 flex-row">
                        <img
                        src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7af/18b1/e87b11c6c407c5e2ca77d3298359fa28"
                        alt="image not found"
                        className="sidebar-travel-icon"
                        />
                        <div className="sidebar-group-138">
                        <p className="sidebar-txt-865">Work</p>
                        </div>
                    </div>
                    <div className="sidebar-frame-148 flex-row">
                        <img
                        src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f6/1bb1/d2c738aae6aa3c21a614d177a9cefc8a"
                        alt="image not found"
                        className="sidebar-travel-icon-1"
                        />
                        <div className="sidebar-group-139">
                        <p className="sidebar-txt-2110">Travel</p>
                        </div>
                    </div>
                    <div className="sidebar-frame-149 flex-row">
                        <img
                        src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14ed/faa7/e523c64cd1ba09304f0da5574e565844"
                        alt="image not found"
                        className="sidebar-food-icon"
                        />
                        <div className="sidebar-group-140">
                        <p className="sidebar-txt-426">Food</p>
                        </div>
                    </div>
                    <div className="sidebar-flex-row">
                        <img
                        src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6704/f7c2/e3bc3081d91dd032fcaef68fa3df04ff"
                        alt="image not found"
                        className="sidebar-shopping-icon"
                        />
                        <div className="sidebar-group-141">
                        <p className="sidebar-txt-169">Shopping </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageFilter
