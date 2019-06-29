<script>
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export default {
  name: "Editor",
  data() {
    return {
      content: "",
      editorOption: {
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote", "code-block"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ direction: "rtl" }],
              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ font: [] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ["emoji"],
              ["clean"],
              ["link", "image", "video"]
            ],
            handlers: { emoji: () => {} }
          },
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          },
          imageDrop: true,
          imageResize: {
            modules: ["Resize", "DisplaySize", "Toolbar"]
          },
          "emoji-toolbar": true,
          "emoji-shortname": true
        }
      }
    };
  },
  methods: {
  }
};
</script>