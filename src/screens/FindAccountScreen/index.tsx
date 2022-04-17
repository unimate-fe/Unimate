import React, {FunctionComponent, useState} from 'react';
import SafeContainer from '@components/SafeContainer';
import Section from '@components/Section';
import PwdSection from '@screens/FindAccountScreen/components/PwdSection';
import IdSection from '@screens/FindAccountScreen/components/IdSection';
interface Props {}

const FindAccountScreen: FunctionComponent<Props> =
  function FindAccountScreen() {
    const [isIdSection, setIsIdSection] = useState(true);

    return (
      <SafeContainer>
        <Section
          style={{marginTop: 28}}
          isFirstActive={isIdSection}
          label1={'아이디'}
          label2={'비밀번호'}
          activeFirst={() => setIsIdSection(true)}
          activeSecond={() => setIsIdSection(false)}
        />
        {isIdSection ? <IdSection /> : <PwdSection />}
      </SafeContainer>
    );
  };
export default FindAccountScreen;
