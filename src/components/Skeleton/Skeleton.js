import React from 'react';
import CardStyles from '../../styles/Cards.module.css';
import SkeletonStyles from '../../styles/Skeleton.module.css';

export default function Skeleton() {
  return (
    <div className={CardStyles.Card}>
        <div className={`${CardStyles.Img} ${SkeletonStyles.Skeleton}`}></div>

        <div className={`${CardStyles.Title} ${SkeletonStyles.Skeleton}`}></div>

        <div className={`${SkeletonStyles.Skeleton} ${SkeletonStyles.SkeletonText}`}></div>
        <div className={`${SkeletonStyles.Skeleton} ${SkeletonStyles.SkeletonText}`}></div>
        <div className={`${SkeletonStyles.Skeleton} ${SkeletonStyles.SkeletonText}`}></div>
        <div className={`${SkeletonStyles.Skeleton} ${SkeletonStyles.SkeletonText}`}></div>

        <div className={`${SkeletonStyles.ButtonS} ${SkeletonStyles.Skeleton}`}></div>
    </div>
  );
}
