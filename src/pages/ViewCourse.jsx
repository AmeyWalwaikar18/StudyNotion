import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFullDetailsOfCourse } from '../services/operations/courseDetailsAPI';
import { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from '../slices/viewCourseSlice';
import { useState,useEffect } from 'react';
import VideoDetailsSidebar from '../components/core/ViewCourse/VideoDetailsSidebar';
import { Outlet } from 'react-router-dom';
import CourseReviewModal from '../components/core/ViewCourse/CourseReviewModal';

const ViewCourse = () => {

    const [reviewModal,setReviewModal] = useState(false);
    const {courseId} = useParams();
    const {token} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const setCourseSpecificDetails = async() => {
            const courseData = await getFullDetailsOfCourse(courseId,token);
            dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
            dispatch(setEntireCourseData(courseData.courseDetails));
            dispatch(setCompletedLectures(courseData.completedVideos));
            let lectures = 0;
            courseData?.courseDetails?.courseContent?.forEach((sec) => {
                lectures += sec.subSection.length;
            })
            dispatch(setTotalNoOfLectures(lectures));
        }
        setCourseSpecificDetails();

    },[]);



  return (
   <>
    <div className='flex md:flex-row flex-col'>
        <VideoDetailsSidebar setReviewModal={setReviewModal} />
        <div className='w-full'>
            <Outlet />
        </div>
    {reviewModal && <CourseReviewModal setReviewModal={setReviewModal}/>}
    </div>
    </>
  )
}

export default ViewCourse
