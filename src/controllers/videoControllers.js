export const trending = (req, res) => res.render("home");


export const see = (req,res) => res.render("watch");

export const edit = (req, res) => res.render("edit");

export const search = (req, res) => {
    res.send("코인 정보 비디오 검색 페이지입니다.");
}
export const upload = (req, res) => {
    res.send("코인 정보 비디오 업로드 페이지입니다.");
}

export const deleteVideo = (req, res) => {
    return res.send("코인 정보 삭제 페이지입니다.");
}
