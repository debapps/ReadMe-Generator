import React, { useState } from "react";
import ShowDown from "showdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReadMeApp() {
    //useState hook for input text.
    const [text, setText] = useState(null);

    // Showdown converter configurations.
    const converter = new ShowDown.Converter();
    converter.setOption("noHeaderId", true);

    // This function is called when user types text inside the text area input.
    function handleText(event) {
        setText(event.target.value);
    }

    // This function converts the input markdown text into HTML text and show it
    // into the preview section.
    function getHTML(inputText) {
        let htmlText = converter.makeHtml(inputText);
        return { __html: htmlText };
    }

    // This function copies the HTML text to clipboard.
    function handleHTMLCopy() {
        let htmlText = converter.makeHtml(text);
        navigator.clipboard.writeText(htmlText);
        toast.success("Copied HTML to Clipboard!");
    }

    // This function copies the markdown text to clipboard.
    function handleMarkCopy() {
        navigator.clipboard.writeText(text);
        toast.success("Copied Markdown Text to Clipboard!");
    }

    // This function clears the input textbox.
    function handleClearText() {
        setText("");
        toast.info("Cleared Input Text.");
    }

    return (
        <main>
            <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <section className="flex flex-row justify-center items-center overflow-x-hidden overflow-y-auto bg-slate-800">
                <button
                    onClick={handleHTMLCopy}
                    className="m-2 p-2 rounded-lg font-poppins text-slate-800 bg-green-300 hover:bg-green-400 active:bg-slate-100 border-2 border-black">
                    Copy Raw HTML
                </button>
                <button
                    onClick={handleMarkCopy}
                    className="m-2 p-2 rounded-lg font-poppins text-slate-800 bg-green-300 hover:bg-green-400 active:bg-slate-100 border-2 border-black">
                    Copy Markdown
                </button>
                <button
                    onClick={handleClearText}
                    className="m-2 p-2 rounded-lg font-poppins text-slate-800 bg-green-300 hover:bg-green-400 active:bg-slate-100 border-2 border-black">
                    Clear Text
                </button>
            </section>
            <section className="flex flex-col md:flex-row justify-center items-center mb-10 px-5">
                <form className="flex flex-col justify-center items-center w-full md:w-1/2">
                    <h3 className="text-xl my-5 font-righteous">
                        Enter Markdown Text
                    </h3>
                    <textarea
                        className="border overflow-auto p-5 text-sm md:text-base font-normal font-poppins bg-slate-800 text-emerald-200"
                        rows="15"
                        cols="65"
                        value={text}
                        onChange={handleText}></textarea>
                </form>
                <div className="flex flex-col justify-start items-center w-full md:w-1/2 px-5">
                    <h3 className="text-xl my-5 font-righteous">Preview</h3>
                    <div
                        dangerouslySetInnerHTML={getHTML(text)}
                        className="preview w-full h-[400px] p-5 border shadow-xl shadow-emerald-100 overflow-y-auto"></div>
                </div>
            </section>
        </main>
    );
}
