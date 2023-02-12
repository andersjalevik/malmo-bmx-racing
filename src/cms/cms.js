import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import StandardPagePreview from "./preview-templates/StandardPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);

CMS.registerPreviewTemplate("traning", StandardPagePreview);
CMS.registerPreviewTemplate("faq", StandardPagePreview);
CMS.registerPreviewTemplate("tavling", StandardPagePreview);
CMS.registerPreviewTemplate("styrelse", StandardPagePreview);
CMS.registerPreviewTemplate("lankar", StandardPagePreview);
CMS.registerPreviewTemplate("arbetsgrupper", StandardPagePreview);
