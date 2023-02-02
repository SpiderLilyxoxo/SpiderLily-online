
import "./app-bg.scss";

const BackGround = (theme) => {
    
    function createCube() {
        const cube = document.createElement("span");
        const blocks = document.querySelector(".blocks");
    
        let size = Math.random() * 80;
    
        cube.style.minWidth = size  + "px";
        cube.style.minHeight = size + "px";
        cube.style.borderRadius = "10%";
        cube.style.zIndex = 1;
    
    
        cube.style.top = 95*Math.random() + "%";
        cube.style.left = 100*Math.random() + "%";
        blocks.appendChild(cube);

        setTimeout(() => {
            cube.remove();
        }, 4000);
    }

    let animation = setInterval(createCube,  500)

    const animationStart = async () => {
        if (theme === true) {
            window.clearInterval(animation); 
        
        } else {
            while (animation--) {
                window.clearInterval(animation); 
            }
        } 
        
    }

    animationStart()

    return (
        <div className="blocks"></div>
    )

}

export default BackGround