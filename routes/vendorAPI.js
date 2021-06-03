const express = require("express");
const router = express.Router();
require("../db/conn");

const VENDOR = require("../model/vendorSchema");
const CITY = require("../model/citySchema");
const VENDOR_REVIEWS = require("../model/vendorReviewsSchema");
const POST_MASTER = require("../model/postMasterSchema");
const POST_ACTION = require("../model/postActionSchema");
const VENDOR_MEDIA = require("../model/vendorMediaSchema");
const ARTIST = require("../model/artistMasterSchema");

router.get("/", (req, res) => {
  res.send("hello from backend");
});

router.post("/setvendor", async (req, res) => {
  const {
    vendor_id,
    vendor_name,
    vendor_lastname,
    vendor_email,
    vendor_avatar,
    vendor_coverpic,
    artist_type,
    vendor_city,
  } = req.body;

  try {
    const vendor = new VENDOR({
      vendor_id,
      vendor_name,
      vendor_lastname,
      vendor_email,
      vendor_avatar,
      vendor_coverpic,
      artist_type,
      vendor_city,
    });

    await vendor.save();
    res.status(201).json({ message: "Sucess!" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/setartists", async (req, res) => {
  const {
    artist_id,
    artist_bio,
    artist_type,
    plural_form,
    description,
    has_video,
    has_extrafields,
    is_active,
  } = req.body;

  try {
    const artist_master = new ARTIST({
      artist_id,
      artist_bio,
      artist_type,
      plural_form,
      description,
      has_video,
      has_extrafields,
      is_active,
    });

    await artist_master.save();
    res.status(201).json({ message: "Sucess!" });
  } catch (err) {
    console.log(err);
  }
});

router.get("/getvendor", async (req, res) => {
  const { vendor_id } = req.body;
  const vendorData = await VENDOR.find();

  if (vendorData) {
    return res.status(200).json({ vendorData });
  }
});

router.get("/getartistdetails", async (req, res) => {
  const id = req.query.id;
  const artist_master = await ARTIST.findOne({ id: id });
  console.log(artist_master);

  if (artist_master) {
    return res.status(200).json({ artist_type: artist_master.artist_type });
  }
});
router.get("/getartistId", async (req, res) => {
  const id = req.query.id;
  const artist_id = await VENDOR.findOne({ vendor_id: id });

  if (artist_id) {
    return res.status(200).json({ artist_type: artist_id.artist_type });
  }
});

router.get("/getartistcity", async (req, res) => {
  const id = req.query.city_id;
  const artist_city = await CITY.findOne({ city_id: id });

  if (artist_city) {
    return res.status(200).json({ artist_city: artist_city.city_name });
  }
});
router.get("/getvendordetails", async (req, res) => {
  const vendor_id = req.query.vendor_id;
  const vendorData = await VENDOR.findOne({ vendor_id: vendor_id });
  // console.log(vendorData);

  if (vendorData) {
    return res.status(200).json({ vendorData });
  }
});

router.post("/setcity", async (req, res) => {
  const { city_id, state_id, city_name, city_code } = req.body;

  try {
    const city = new CITY({
      city_id,
      state_id,
      city_name,
      city_code,
    });

    await city.save();
    res.status(201).json({ message: "Sucess!" });
  } catch (err) {
    console.log(err);
  }
});
router.post("/setvendorReview", async (req, res) => {
  const {
    review_id,
    customer_id,
    vendor_id,
    category_of_service,
    date_of_service_taken,
    photography_skill_rating,
    customer_name,
    review_comments,
    is_approved,
  } = req.body;

  try {
    const reviews = new VENDOR_REVIEWS({
      review_id,
      customer_id,
      vendor_id,
      category_of_service,
      date_of_service_taken,
      photography_skill_rating,

      customer_name,

      review_comments,

      is_approved,
    });

    await reviews.save();
    res.status(201).json({ message: "Sucess!" });
  } catch (err) {
    console.log(err);
  }
});
router.post("/setpostmaster", async (req, res) => {
  const {
    post_id,
    post_requirement_id,
    post_update_id,
    post_user_id,
    parent_post_id,
    post_type,
    post_user_type,
    post_status,
  } = req.body;

  try {
    const postMaster = new POST_MASTER({
      post_id,
      post_requirement_id,
      post_update_id,
      post_user_id,
      parent_post_id,
      post_type,
      post_user_type,
      post_status,
    });

    await postMaster.save();
    res.status(201).json({ message: "Sucess!" });
  } catch (err) {
    console.log(err);
  }
});
router.post("/setpostaction", async (req, res) => {
  const {
    post_action_id,
    post_id,
    actor_id,
    post_user_id,
    post_action_type,
    post_action_desc,
    post_action_status,
  } = req.body;

  try {
    const postAction = new POST_ACTION({
      post_action_id,
      post_id,
      actor_id,
      post_user_id,
      post_action_type,
      post_action_desc,
      post_action_status,
    });

    await postAction.save();
    res.status(201).json({ message: "Sucess!" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/setvendorMedia", async (req, res) => {
  const { media_id, vendor_id, media_type, media_link, media_status } =
    req.body;

  try {
    const vendorMedia = new VENDOR_MEDIA({
      media_id,
      vendor_id,
      media_type,
      media_link,
      media_status,
    });

    await vendorMedia.save();
    res.status(201).json({ message: "Sucess!" });
  } catch (err) {
    console.log(err);
  }
});

router.get("/getpostmasterdetails", async (req, res) => {
  const user_id = req.query.user_id;
  const post_status = 1;
  const Postdata = await VENDOR_MEDIA.count(
    { user_id: user_id } && { post_status: post_status }
  );
  // console.log(vendorData);

  if (Postdata) {
    return res.status(200).json({ count: Postdata });
  }
});
router.get("/getpostactiondetails", async (req, res) => {
  const vendor_id = req.query.vendor_id;
  const media_status = 1;
  const postAction = await VENDOR_MEDIA.count({
    $and: [{ vendor_id: vendor_id }, { media_status: media_status }],
  });

  // console.log(vendorData);

  if (postAction) {
    return res.status(200).json({ count: postAction });
  }
});
router.get("/getusermedia", async (req, res) => {
  const vendor_id = req.query.vendor_id;
  const media_status = 1;
  const userMedia = await VENDOR_MEDIA.find({ vendor_id: vendor_id });

  // console.log(vendorData);

  if (userMedia) {
    return res.status(200).json({ userMedia });
  }
});

router.get("/getfollowing", async (req, res) => {
  const actor_id = req.query.actor_id;
  const post_action_type = "Follow";
  const following = await POST_ACTION.count({
    $and: [{ actor_id: actor_id }, { post_action_type: post_action_type }],
  });

  // console.log(vendorData);

  if (following) {
    return res.status(200).json({ count: following });
  }
});

router.get("/getfollowers", async (req, res) => {
  const post_user_id = req.query.post_user_id;
  const post_action_type = "Follow";
  const follower = await POST_ACTION.count({
    $and: [
      { post_user_id: post_user_id },
      { post_action_type: post_action_type },
    ],
  });

  // console.log(vendorData);

  if (follower) {
    return res.status(200).json({ count: follower });
  }
});

router.get("/getcitydetails", async (req, res) => {
  const city_name = req.query.city_name;
  const Citydata = await CITY.findOne({ city_name: city_name });
  // console.log(vendorData);

  if (Citydata) {
    return res.status(200).json({ Citydata });
  }
});

router.get("/getreviewsdetails", async (req, res) => {
  const vendor_id = req.query.vendor_id;
  const is_approved = 1;
  const reviewData = await VENDOR_REVIEWS.find({
    $and: [{ vendor_id: vendor_id }, { is_approved: is_approved }],
  });
  // console.log(vendorData);

  if (reviewData) {
    return res.status(200).json({ reviewData });
  }
});
module.exports = router;
