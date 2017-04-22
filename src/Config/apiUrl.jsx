// 提交报名表单接口
export const submitFormUrl = 'http://www.cfdq.midea.com/meeting/index.php/meetingadmin/form/addForm';

// 获取报名表单接口
export const getRegisterForm = 'http://www.cfdq.midea.com/meeting/index.php/meetingadmin/form/viewForm';

// 添加会议接口
export const newActUrl = 'http://www.cfdq.midea.com/meeting/index.php/meetingadmin/meetings/add';

// 显示会议列表接口
export const getActList = 'http://www.cfdq.midea.com/meeting/index.php/meetingadmin/meetings/index';

// 获取会议基本信息接口
export const getMeetingBase = 'http://www.cfdq.midea.com/meeting/index.php/meetingadmin/meetings/info';

// 修改会议详情信息接口
export const updateMeetingBase = 'http://www.cfdq.midea.com/meeting/index.php/meetingadmin/meetings/editor';

// 导出所有报名人员接口
export const getAllRegister = 'http://www.cfdq.midea.com/meeting/mock/downloadAllAttendee.php';

// 获取参与人员表中数据
export const getAttendeeTable = 'http://www.cfdq.midea.com/meeting/mock/getAttendeeTable.php';

/**
 * 报名表单页面
 */
// 增加报名通道接口
export const addRigisterChannel = 'http://www.cfdq.midea.com/meeting/index.php/Meetingadmin/form/addticket';
// 获取报名通道接口
export const getRegisterChannel = 'http://www.cfdq.midea.com/meeting/index.php/Meetingadmin/form/ticketlist';
// 删除报名通道接口
export const delRegisterChannel = 'http://www.cfdq.midea.com/meeting/index.php/Meetingadmin/form/deleteticket';
// 修改报名通道接口
export const modRegisterChannel = 'http://www.cfdq.midea.com/meeting/index.php/Meetingadmin/form/modifyticket';

/**
 * 会议签到页面接口
 */
// 添加签到接口
export const addCheckin = 'http://www.cfdq.midea.com/meeting/index.php/meetingadmin/signin/add';
// 获取签到列表
export const getCheckin = 'http://www.cfdq.midea.com/meeting/index.php/Meetingadmin/signin/signlist';
// 删除签到列表接口
export const delCheckin = 'http://www.cfdq.midea.com/meeting/index.php/Meetingadmin/signin/deletesign';
// 获取签到人员信息接口
export const getCheckinDetails = 'http://www.cfdq.midea.com/meeting/index.php/meetingadmin/signin/signinfo';
// 更改某个签到人员的签到状态
export const changeCheckinStatus = 'http://www.cfdq.midea.com/meeting/index.php/meetingadmin/signin/checkin';
// 会议签到通知领导的功能
export const noticeManager = 'http://www.cfdq.midea.com/meeting/index.php/Meetingadmin/signin/msgnotice';