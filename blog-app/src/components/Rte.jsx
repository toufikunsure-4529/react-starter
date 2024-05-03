import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { Controller } from "react-hook-form";

//functon control is a react hook form controller which is responsibility this component when used to this component state access parent render component
function Rte({ name, control = "", label, defaultValue = "Welcome " }) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor="" className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      {/* Controller pass this component state another components same as forwardRef ref compoent value state event so on  which is import react-hook-form */}
      <Controller
        name={name || "content"} //name pass for props not found to content show
        control={control} //[control to control parent element in this compoent state which is pass Controller state/event/value]
        //render expect callback and pass field and trucking set if field changes to inform rendering and after render field inpur
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="f39wcq9dwvbptac28gnkl37wm6bo8auov7brv0r2r8c8a3lm"
            intialValue={defaultValue}
            init={{
              height: 500,
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
              tinycomments_mode: "embedded",
              tinycomments_author: "Author name",
              mergetags_list: [
                { value: "First.Name", title: "First Name" },
                { value: "Email", title: "Email" },
              ],
              ai_request: (request, respondWith) =>
                respondWith.string(() =>
                  Promise.reject("See docs to implement AI Assistant")
                ),
            }}
            initialValue="Welcome to Our App Write Us...!"
            onEditorChange={onchange} //edit any change to gaven editor on changes
          />
        )}
      />{" "}
    </div>
  );
}

export default Rte;
