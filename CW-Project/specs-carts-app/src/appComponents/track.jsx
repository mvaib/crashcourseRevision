import { ProgressBar, ProgressRoot } from "@/components/ui/progress"

function Track(){
    return(
        <>
             <div>
                <img src="https://tidyrepo.com/wp-content/uploads/2018/05/underconstructionpage-wordpress-review.jpg" alt=""  style={{width: "100%", height: "100%"}}/>
            </div>
            <br />
            <br />
            <br />
            <ProgressRoot maxW="100%" value={null}>
                 <ProgressBar />
            </ProgressRoot>
        </>
    )
}

export default Track