import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";
import { mockBlocks } from "./mock/mockServer";
import { apiFormBlocks } from "./api/apiConfig";
import { useCallback, useEffect, useState } from "react";

registerCoreBlocks();

const App = () => {
  const [theBlocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFormBlocks = useCallback(async () => {
    try {
      let blocks = await apiFormBlocks();
      if (!blocks.length) {
        blocks = mockBlocks();
      }
      setBlocks(blocks);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blocks:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getFormBlocks();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Form
          formId={1}
          applyLogic={true}
          formObj={{
            blocks: theBlocks,
            settings: {
              animationDirection: "vertical",
              disableWheelSwiping: false,
              disableNavigationArrows: false,
              disableProgressBar: false,
            },
            theme: {
              font: "Roboto",
              buttonsBgColor: "#9b51e0",
              logo: {
                src: "",
              },
              questionsColor: "#000",
              answersColor: "#0aa7c2",
              buttonsFontColor: "#fff",
              buttonsBorderRadius: 25,
              errorsFontColor: "#fff",
              errorsBgColor: "#f00",
              progressBarFillColor: "#000",
              progressBarBgColor: "#ccc",
            },
          }}
          onSubmit={(data, { completeForm, setIsSubmitting }) => {
            setTimeout(() => {
              setIsSubmitting(false);
              completeForm();
            }, 500);
          }}
        />
      )}
    </div>
  );
};

export default App;
