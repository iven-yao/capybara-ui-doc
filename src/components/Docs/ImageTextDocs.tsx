import { useState } from "react";
import QuickViewResult from "./QuickViewResult";
import ImageText from "../Text/ImageText";
import Input from "../Input";

const ImageTextDocs = () => {
    const [src, setSrc] = useState('https://www.pbs.org/wnet/nature/files/2023/07/pexels-pixabay-160583-scaled-e1689259491194-1280x720.jpg');
    const [text, setText] = useState('Capybara');
    const [fontSize, setFontSize] = useState(120);

    return (
        <>
            <div className="title">Image Text</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <div className="select-panel">
                        <div className="label">
                            src
                        </div>
                        <div className="control">
                            <Input type="text" value={src} onChange={v => setSrc(v)} />
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            text
                        </div>
                        <div className="control">
                            <Input type="text" value={text} onChange={(v) => setText(v)} />
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            font size
                        </div>
                        <div className="control">
                            <Input type="number" value={fontSize} onChange={(v) => setFontSize(Number(v))} />
                        </div>
                    </div>
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>

                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        <ImageText src={src} fontSize={fontSize}>
                            {text}
                        </ImageText>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default ImageTextDocs;