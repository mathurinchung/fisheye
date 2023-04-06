import MediaModel from "./media.js";

export default class VideoModel extends MediaModel {
  constructor(data) {
    super(data);
    this._video = data.video;
  }

  get media() {
    const extension = this._video.split(".")[1];

    return `
      <video class="media" title="${ this.title }">
        <source src="${this.path + this._video}" type="video/${extension}">
        <track src="./src/assets/captions/vtt/captions_fr.vtt" kind="captions" srclang="fr" label="french_captions" default="true">
      </video>
    `;
  }
}
