module.exports.mainPage = (req, res) => {
    res.render("main_page", { message: null });
};

module.exports.logIn = (req, res) => {
    res.render("log_in", { message: null });
};

module.exports.awardsAchievements = (req, res) => {
    res.render("awardsAchivements", { message: null });
};
module.exports.termsCon = (req, res) => {
    res.render("terms_and_conditions", { message: null });
};
module.exports.mediaNews = (req, res) => {
    res.render("media_news", { message: null });
};

module.exports.activities = (req, res) => {
    res.render("activities", { message: null });
};
module.exports.introInGujarati = (req, res) => {
    res.render("introInGujarati", { message: null });
};
module.exports.introInHindi = (req, res) => {
    res.render("introInHindi", { message: null });
};
module.exports.concept = (req, res) => {
    res.render("concept", { message: null });
};
