
import "./app-bg.scss";

const BackGround = (theme) => {

    function createCube() {
        const blocks = document.querySelector(".blocks");
        const cube = document.createElement("span");
    
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
        }, 5000);

    }

    var animation = setInterval(createCube,  350)

    const animationStart = (i) => {
        if (theme === "dark") {
            animation()
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