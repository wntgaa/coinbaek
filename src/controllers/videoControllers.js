export const trending = (req,res) => {
    res.send("트렌드 코인 비디오들 확인 할수 있습니다.");
}

export const see = (req,res) => {
    console.log(req.params.id);
    res.send(`코인 비디오  #${req.params.id}시청 입니다.`);
}

export const edit = (req,res) =>{
    
    return res.send(" 코인 정보 비디오 수정 페이지 입니다");
}

export const search = (req, res) => {
    res.send("코인 정보 비디오 검색 페이지입니다.");
}
export const upload = (req, res) => {
    res.send("코인 정보 비디오 업로드 페이지입니다.");
}

export const deleteVideo = (req, res) => {
    return res.send("코인 정보 삭제 페이지입니다.");
}

