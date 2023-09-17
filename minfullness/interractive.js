AFRAME.registerComponent('remove', {
    schema: {},
    init: function () {
      this.el.addEventListener("click", () => {
        this.el.parentNode.removeChild(this.el);
      });
    },
  });
  