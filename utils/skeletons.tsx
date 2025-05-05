export default function SkeletonPatientList() {
    let loadingRows = [];
    for (let i = 0; i < 20; i++) {
        loadingRows.push(
            <tr key={i} className="tBodyTr h-[80px] tBodyTrSkel">
                <td className="tdPatientsList tdSkel">
                    <div className="border- flex justify-center h-full">
                        <div className="border-1 border-blue-300 h-[70px] w-[70px] rounded-full skelImageList">
                        </div>
                    </div>
                </td>
                <td className="tdPatientsList tdSkel"> <div className="h-[20px] flex justify-center"><div className="bg-[#def4ff] skelImageList rounded-full h-full w-[50%]"></div></div></td>
                <td className="tdPatientsList tdSkel"> <div className="h-[20px] flex justify-center"><div className="bg-[#def4ff] skelImageList rounded-full h-full w-[50%]"></div></div></td>
                <td className="tdPatientsList tdSkel"> <div className="h-[20px] flex justify-center"><div className="bg-[#def4ff] skelImageList rounded-full h-full w-[50%]"></div></div></td>
                <td className="tdPatientsList tdSkel"> <div className="h-[20px] flex justify-center"><div className="bg-[#def4ff] skelImageList rounded-full h-full w-[50%]"></div></div></td>
                <td className="tdPatientsList tdSkel"> <div className="h-[20px] flex justify-center"><div className="bg-[#def4ff] skelImageList rounded-full h-full w-[50%]"></div></div></td>
                <td className="tdPatientsList tdSkel"> <div className="h-[20px] flex justify-center"><div className="bg-[#def4ff] skelImageList rounded-full h-full w-[50%]"></div></div></td>
            </tr>
        );
    }

    return loadingRows;
}